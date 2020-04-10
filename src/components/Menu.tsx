import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { bookmarkOutline, checkmarkDoneCircleOutline, checkmarkDoneCircleSharp, gridOutline, gridSharp, listOutline, listSharp, trashOutline, trashSharp } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps, useLocation, withRouter } from 'react-router-dom';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Matrix',
    url: '/page/Matrix',
    iosIcon: gridOutline,
    mdIcon: gridSharp
  },
  {
    title: 'Tasks',
    url: '/page/Tasks',
    iosIcon: listOutline,
    mdIcon: listSharp
  },
  {
    title: 'Done',
    url: '/page/Done',
    iosIcon: checkmarkDoneCircleOutline,
    mdIcon: checkmarkDoneCircleSharp
  },
  {
    title: 'Trash',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders', 'School'];

const Menu: React.FunctionComponent<RouteComponentProps> = () => {

  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Matrify</IonListHeader>
          <IonNote>Welcome, Kimberly</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
