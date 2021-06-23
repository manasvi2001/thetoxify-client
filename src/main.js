import { createApp } from 'vue';
import router from './router';
import store from './store/index';
import firebase from 'firebase';

import App from './App.vue';
import { QuillEditor } from "@vueup/vue-quill";
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

var firebaseConfig = {
  "apiKey": "AIzaSyBQIrWQaM2Mc6LHdD1QPa0nQaYa4bB-U2A",
  "authDomain": "thetoxify-firebase.firebaseapp.com",
  "projectId": "thetoxify-firebase",
  "storageBucket": "thetoxify-firebase.appspot.com",
  "messagingSenderId": "493647121413",
  "appId": "1:493647121413:web:c0adc8eda4ce1d2f61a06c",
  "measurementId": "G-6DPSP7Q5X0"
}

firebase.initializeApp(firebaseConfig);

library.add(faChevronUp, faChevronDown);

const app = createApp(App);
app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('quill-editor', QuillEditor);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
