import {
    FlatList,
    Image,
    ImageProps,
    Text,
    TouchableWithoutFeedback,
    View,
    useColorScheme
} from "react-native";
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
    SPONSERS_DATA,
    SIGNIN_TEXT,
} from "@/constants";
import { ligthTheme } from "@/theme";
import SingUpButton from "@/components/singUpButton";
import React, { useState } from "react";
import ModalContainer from "@/components/ModalContainer";
import SingModal from "@/components/SingModal";
import { googleSingIn, facebookSingIn } from "@/api/firebase";

interface SingUpButtonData {
    onClick: () => void

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

    function handleCreateAccount() {
        handleToggleModel()
        handleSetModalContent(<SingModal
            title={SIGNUP_CREATE_ACCOUNT_TEXT}
            type="SingUp"
            onPress={handleCloseModel} />)
    }

    function handleLogin() {
        handleToggleModel()
        handleSetModalContent(<SingModal
            title={SIGNIN_TEXT}
            type="SingIn"
            onPress={handleCloseModel} />)
    }

    function handleCloseModel() {
        setIsModalOpen(false)
    }

    function handleSetModalContent(content: React.JSX.Element) {
        setModalContent(content)
    }

    const singUpData: SingUpButtonData[] = [
        {
            onClick: handleCreateAccount,

            image: IMAGES.addAccButton,
            colors: theme.singUpButton.addAcc,
            buttonText: SIGNUP_CREATE_ACCOUNT_TEXT,
        },
        {
            onClick: () => { googleSingIn() },

            image: IMAGES.addGoogleButton,
            colors: theme.singUpButton.googleAcc,
            buttonText: SIGNUP_CONTINUE_WITH_GOOGLE_TEXT,
        },
        {
            onClick: () => { },

            image: IMAGES.addFacebookButton,
            colors: theme.singUpButton.facebookAcc,
            buttonText: SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT,
        },
        {
            onClick: () => { facebookSingIn() },

            image: IMAGES.addGithubButton,
            colors: theme.singUpButton.gitHubAcc,
            buttonText: SIGNUP_SIGNUP_WITH_GITHUB_TEXT,
        },
    ];

    const sponsoresImages = SPONSERS_DATA.map((x, index) =>
        <Image key={index} source={x.image} />)

    const renderSingUpItem = ({ item }: { item: SingUpButtonData }) => (
        <SingUpButton
            onClick={item.onClick}
            image={item.image}
            colors={item.colors}
            buttonText={item.buttonText}
        />
    );

    const keyExtractor = (item: SingUpButtonData, index: number) => index.toString();

    return (
        <View style={[styles.container,
        { backgroundColor: theme.welcomScreen.backgroundColor }]}>
            <View style={styles.mainContant}>
                <Image style={styles.logoImage} source={IMAGES.welcomLogo} />
                <Text style={[styles.welcomText,
                { color: theme.welcomScreen.color }]}>{WELCOME_TEXT}</Text>
                <View style={styles.singContainer}>
                    <FlatList
                        style={styles.singUpFlatList}
                        data={singUpData}
                        renderItem={renderSingUpItem}
                        keyExtractor={keyExtractor}
                    />
                    <Text style={[styles.alreadyAccText, { color: theme.welcomScreen.color }]}>
                        {ALREADY_HAS_ACCOUNT_TEXT}
                        <TouchableWithoutFeedback onPress={handleLogin}>
                            <Text style={styles.loginText}>{LOGIN_TEXT}</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.sponsoresContainer}>
                    {sponsoresImages}
                </View>

                <Text style={[styles.versionText,
                { color: theme.welcomScreen.color }]}>{VERSION_TEXT}</Text>
            </View>

            <ModalContainer
                isModalVisible={isModalOpen}
                toggleModal={handleToggleModel}>
                {modalContent}
            </ModalContainer>
        </View >
    );
}

export default WelcomeScreen;