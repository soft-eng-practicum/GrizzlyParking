import { action, observable, computed } from "mobx";
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

export class ParkingDomain {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // Reusable reference for the parking lot firestore collection
    firestoreRef = firestore().collection('ParkingLots');

    // Listener storage for easy removal at the end of the function.
    firestoreListener;

    @observable
    parkingLots = []

    @action
    markAsParked(lot) {
        this.firestoreRef.doc(lot).update({
            LastCheckin: firestore.Timestamp.now(),
        })
    }

    @action
    async setListenerForLastCheckin () {
        await this.getParkingLotData();

        /*firestoreListener = this.firestoreRef.onSnapshot(
            {includeMetadataChanges: true},
            (querySnapshot) => {
                this.parkingLots.filter(p => p.Lot == querySnapshot.data().Lot).map(q => {
                    q.LastCheckin = querySnapshot.data().LastCheckin;
                })
            },
            (error) => console.error(error)
        )*/
    }

    async getParkingLotData () {
        let data = await this.firestoreRef.get();

        data.docs.map(lot => {
            this.parkingLots.push({
                Name: lot.data().Lot,
                LastCheckin: lot.data().LastCheckin,
                CheckinPercent: (lot.data().CheckinPercent - (moment().diff(moment(lot.data().LastCheckin.toDate()), 'hours') * 10)),
            });
        });
    }

    @action
    removeListenerForLastCheckin() {
        //this.firestoreListener();
    }
    
    @action
    navigateToLanding(navigation) {
        navigation.navigate("Landing");
    }
}