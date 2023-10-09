import {
  View, StatusBar, SectionList, Text,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getFilmSession, getTickets, handleDeleteTicket } from '@/api/firebase/filmFirebase';
import { getFilmByTitle, getMoviesInfo } from '@/api/rapid';
import {
  filterMissedTickets, filterPastTickets, filterUpcomingTickets, formatDateMonthYear,
} from '@/helpingFunctions';
import { ListTicket } from '@/types';
import TicketFlatListItem from '@/components/TicketFlatListItem';
import ModalContainer from '@/components/ModalContainer';
import DeleteTicketModal from '@/components/DeleteTicketModal';
import { useAppSelector } from '@/hooks';
import { RootRouteProps } from '@/route/TicketRoot/types';
import styles from './styles';
interface SectionListData {
    title: string,
    data: ListTicket[]
}

function TicketScreen() {
  const theme = useAppSelector((state) => state.theme.value);
  const route = useRoute<RootRouteProps<'upcoming'>>();
  const { type } = route.params;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sectionListData, setSectionListData] = useState<SectionListData[]>([]);
  const [ticketOnDelete, setTicketOnDelete] = useState<string>('');

  useEffect(() => {
    handleSetTickets();
  });

  async function handleSetTickets() {
    let sortedListTickets: ListTicket[] = [];
    const sectionListData: SectionListData[] = [];

    const tickets = await getTickets();

    const listTickets = await Promise.all(tickets.map(async (ticket) => {
      const session = await getFilmSession(ticket.filmId, ticket.sessionId);
      const film = await getMoviesInfo(ticket.filmId);
      const filmInfo = await getFilmByTitle(film?.title ?? '');
      const flatListTicket: ListTicket = {
        past: ticket.past,
        date: session?.date ?? '',
        coast: (session?.coast ?? 0) * ticket.ticketCount,
        poster: filmInfo?.imageurl[0] ?? '',
        seatCount: ticket.ticketCount,
        ticketId: ticket.ticketId,
        title: film?.title ?? '',
      };
      return flatListTicket;
    }));

    if (type === 'upcoming') {
      sortedListTickets = filterUpcomingTickets(listTickets);
    } else if (type === 'past') {
      sortedListTickets = filterPastTickets(listTickets);
    } else {
      sortedListTickets = filterMissedTickets(listTickets);
    }

    sortedListTickets.forEach((ticket) => {
      const ticketDate = formatDateMonthYear(ticket.date);
      const sectionIndex = sectionListData.findIndex((section) => section.title === ticketDate);

      if (sectionIndex != -1) {
        sectionListData[sectionIndex].data.push(ticket);
      } else {
        sectionListData.push({ title: ticketDate, data: [ticket] });
      }
    });

    setSectionListData(sectionListData);
  }

  function tonggleModalVisible() {
    setIsModalOpen(!isModalOpen);
  }

  function chooseDeleteTicket(ticketId: string) {
    tonggleModalVisible();
    setTicketOnDelete(ticketId);
  }

  function onDeleteTicket() {
    handleDeleteTicket(ticketOnDelete);
    handleSetTickets();
  }

  const renderItem = ({ item }: { item: ListTicket }) => (
    <TicketFlatListItem
      item={item}
      onDeleteTicket={chooseDeleteTicket}
      type={type}
    />
  );
  return (
    <>
      <StatusBar backgroundColor={theme.ticketScreen.backgroundColor} />
      <View style={[styles.container,
        { backgroundColor: theme.ticketScreen.backgroundColor }]}
      >
        <SectionList
          style={styles.sectionList}
          sections={sectionListData}
          keyExtractor={(item, index) => item.title + index}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={[styles.sectionHeaderText,
              { color: theme.ticketScreen.color }]}
            >
              {title}
            </Text>
          )}
        />
      </View>
      <ModalContainer
        isModalVisible={isModalOpen}
        toggleModal={tonggleModalVisible}
      >
        <DeleteTicketModal onSubmit={onDeleteTicket} onCloseModal={tonggleModalVisible} />
      </ModalContainer>
    </>
  );
}

export default TicketScreen;
