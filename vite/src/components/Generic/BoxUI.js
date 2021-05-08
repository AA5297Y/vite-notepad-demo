import Avatar from "./Avatar/Avatar.vue"
import BtnGroup from "./BtnGroup/BtnGroup.vue"
import Card from "./Card/Card.vue"
import FeedBack from "./FeedBack/FeedBack.vue"
import GenBtn from "./GenBtn/GenBtn.vue"
import GenBtnFlat from "./GenBtnFlat/GenBtnFlat.vue"
import GenListItem from "./GenListItem/GenListItem.vue"
import GenTextBox from "./GenTextBox/GenTextBox.vue"
import HorList from "./HorList/HorList.vue"
import Loading from "./Loading/Loading.vue"
import Pagination from "./Pagination/Pagination.vue"
import Spacing from "./Spacing/Spacing.vue"
import VetList from "./VetList/VetList.vue"
import Window from "./Window/Window.vue"

const BoxUI = {
  async install(app, ...options) {
    app.component("Avatar", Avatar)
    app.component("BtnGroup", BtnGroup)
    app.component("Card", Card)
    app.component("FeedBack", FeedBack)
    app.component("GenBtn", GenBtn)
    app.component("GenBtnFlat", GenBtnFlat)
    app.component("GenListItem", GenListItem)
    app.component("GenTextBox", GenTextBox)
    app.component("HorList", HorList)
    app.component("Loading", Loading)
    app.component("Pagination", Pagination)
    app.component("Spacing", Spacing)
    app.component("VetList", VetList)
    app.component("Window", Window)
  }
}

export default BoxUI
