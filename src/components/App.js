import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { useEffect, useState } from "react";
import React from "react";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import DeleteConfirmPopup from "./DeleteConfirmPopup";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import InfoTooltip from "./InfoTooltip.js";
import ProtectedRoute from "./ProtectedRoute.js";
import * as auth from "../utils/MestoAuth.js";
function App() {
  const navigate = useNavigate();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] =
    useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const isAnyPopupOpened =
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    selectedCard;
  const [isLoading, setIsLoading] = useState(false);
  const [currentDeletionCard, setCurrentDeletionCard] = useState(null);
  const [isSuccessTooltipStatus, setIsSuccessTooltipStatus] = useState(true);
  const [authEmail, setAuthEmail] = useState("");

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getCards()])
        .then(([user, cards]) => {
          setCurrentUser(user);
          setCards(cards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteConfirmPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard(null);
  }
  function handleDeleteConfirmClick(card) {
    setCurrentDeletionCard(card);
    setIsDeleteConfirmPopupOpen(true);
  }
  function handleLogin() {
    setLoggedIn(true);
  }
  function handleInfoToolOpen() {
    setIsInfoTooltipOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .setLikeCard(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      api
        .removeLikeCard(card._id, isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleUpdateUser(user) {
    setIsLoading(true);
    api
      .editUserInfo(user)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleUpdateAvatar(user) {
    setIsLoading(true);
    api
      .editAvatar(user)
      .then((updateAvatar) => {
        setCurrentUser(updateAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleAddPlaceSubmit(place) {
    setIsLoading(true);
    api
      .addCard(place)
      .then((addedPlace) => {
        setCards([addedPlace, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleRegister(data) {
    auth
      .register(data)
      .then((res) => {
        handleInfoToolOpen();
        setIsSuccessTooltipStatus(true);
        navigate("/signin");
      })
      .catch((err) => {
        handleInfoToolOpen();
        setIsSuccessTooltipStatus(false);
      });
  }
  function handleAuthorize(data) {
    auth
      .authorize(data)
      .then((res) => {
        if (res.token) localStorage.setItem("jwt", res.token);
        setAuthEmail(data.email);
        handleLogin();
        navigate("/");
      })
      .catch((err) => {
        handleInfoToolOpen();
        setIsSuccessTooltipStatus(false);
      });
  }
  function handleLoggedOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }
  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    auth
      .getContent(jwt)
      .then((data) => {
        setAuthEmail(data.data.email);
        handleLogin();
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          email={authEmail}
          onClick={handleLoggedOut}
          loggedIn={loggedIn}
        ></Header>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Main
                  onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDeleteClick={handleDeleteConfirmClick}
                />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/signup"
            element={<Register onSubmit={handleRegister} />}
          />
          <Route
            path="/signin"
            element={<Login onSubmit={handleAuthorize} />}
          />
          <Route
            path="/*"
            element={loggedIn ? <Navigate to="/"/> : <Navigate to="/signin"/>}
            // element={
            //   <Main
            //     onEditProfile={handleEditProfileClick}
            //     onEditAvatar={handleEditAvatarClick}
            //     onAddPlace={handleAddPlaceClick}
            //     onCardClick={handleCardClick}
            //     cards={cards}
            //     onCardLike={handleCardLike}
            //     onCardDeleteClick={handleDeleteConfirmClick}
            //   />
            // }
          />
        </Routes>
        <InfoTooltip
          isSuccess={isSuccessTooltipStatus}
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isLoading={isLoading}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isLoading={isLoading}
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddPlaceSubmit}
        />
        <DeleteConfirmPopup
          onClose={closeAllPopups}
          isOpen={isDeleteConfirmPopupOpen}
          onSubmit={handleCardDelete}
          isLoading={isLoading}
          cardId={currentDeletionCard}
        />
        <EditAvatarPopup
          isLoading={isLoading}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isPopupOpened={selectedCard !== null}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
