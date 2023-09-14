import { FlatList, Image, ImageProps, Text, TouchableWithoutFeedback, View, useColorScheme } from "react-native";
import styles from "./styles";
import { IMAGES } from "@assets/images";
import {
    SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT,
    SIGNUP_CREATE_ACCOUNT_TEXT,
    SIGNUP_SIGNUP_WITH_GITHUB_TEXT,
    SIGNUP_CONTINUE_WITH_GOOGLE_TEXT,
    WELCOME_TEXT,
    ALREADY_HAS_ACCOUNT_TEXT,
    LOGIN_TEXT,
    VERSION_TEXT,
    sponsorsData
} from "@/constants";
import { ligthTheme } from "@/theme";
import SingUpButton from "@/components/singUpButton";
import React, { useState } from "react";
import ModalContainer from "@/components/ModalContainer";

interface SingUpButtonData {
    onClick: () => void
    id: string;
    image: ImageProps;
    colors: {
        backgroundColor: string;
        color: string;
    };
    buttonText: string;
}

function WelcomeScreen() {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

    function handleToggleModel() {
        setIsModalOpen(!isModalOpen)
    }

    function handleSetModalContent(content: React.JSX.Element) {
        setModalContent(content)
    }

    const singUpData: SingUpButtonData[] = [
        {
            onClick: () => {
                handleToggleModel()
                handleSetModalContent(<></>)
             },
            id: '1',
            image: IMAGES.addAccButton,
            colors: theme.singUpButton.addAcc,
            buttonText: SIGNUP_CREATE_ACCOUNT_TEXT,
        },
        {
            onClick: () => { },
            id: '2',
            image: IMAGES.addGoogleButton,
            colors: theme.singUpButton.googleAcc,
            buttonText: SIGNUP_CONTINUE_WITH_GOOGLE_TEXT,
        },
        {
            onClick: () => { },
            id: '3',
            image: IMAGES.addFacebookButton,
            colors: theme.singUpButton.facebookAcc,
            buttonText: SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT,
        },
        {
            onClick: () => { },
            id: '4',
            image: IMAGES.addGithubButton,
            colors: theme.singUpButton.gitHubAcc,
            buttonText: SIGNUP_SIGNUP_WITH_GITHUB_TEXT,
        },
    ];

    const sponsoresImages = sponsorsData.map(x =>
        <Image key={x.id} source={x.image} />)

    const renderSingUpItem = ({ item }: { item: SingUpButtonData }) => (
        <SingUpButton
            onClick={item.onClick}
            image={item.image}
            colors={item.colors}
            buttonText={item.buttonText}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.mainContant}>
                <Image style={styles.logoImage} source={IMAGES.welcomLogo} />
                <Text style={styles.welcomText}>{WELCOME_TEXT}</Text>
                <View style={styles.singContainer}>
                    <FlatList
                        style={styles.singUpFlatList}
                        data={singUpData}
                        renderItem={renderSingUpItem}
                        keyExtractor={(item) => item.id}
                    />
                    <Text style={styles.alreadyAccText}>
                        {ALREADY_HAS_ACCOUNT_TEXT}
                        <TouchableWithoutFeedback>
                            <Text style={styles.loginText}>{LOGIN_TEXT}</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                </View>
            </View>


            <View style={styles.footer}>
                <View style={styles.sponsoresContainer}>
                    {sponsoresImages}
                </View>

                <Text style={styles.versionText}>{VERSION_TEXT}</Text>
            </View>

            <ModalContainer
                isModalVisible={isModalOpen}
                toggleModal={handleToggleModel}>
                {modalContent}
            </ModalContainer>
        </View>
    );
}

export default WelcomeScreen;