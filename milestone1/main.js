const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            },
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ]
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ]
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ]
        },
      ],

      selectedContact: null,
      newMessage: '' ,
    };
  },
  methods: {
    selectContact(contact) {
      this.selectedContact = contact;
      console.log("Contatto selezionato:", contact);
    },

    sendMessage() {
      if (this.newMessage.trim() === '') return;

      const currentDate = new Date().toLocaleString();
      const newSentMessage = {
        date: currentDate,
        message: this.newMessage,
        status: 'sent'
      };

      this.selectedContact.messages.push(newSentMessage);
      console.log("Messaggio inviato:", newSentMessage);

      setTimeout(() => {
        const currentDate = new Date().toLocaleString();
        const newReceivedMessage = {
          date: currentDate,
          message: 'Ok',
          status: 'received'
        };

        this.selectedContact.messages.push(newReceivedMessage);
        console.log("Risposta inviata:", newReceivedMessage);
      }, 2000);

      this.newMessage = ''; 
    }
  }
}).mount("#app");