<template>
  <div class="shadow div p-3 mb-5 bg-body-tertiary rounded" v-for="book in books" :key="book.ID">
    <div class="content">
      <div class="title">
        <div class="img text-center">
          <img :src="book.IMAGE_URL" alt="Обкладинка книги" />
        </div>
        <div class="book-info">
          <p>Назва: {{ book.TITLE }}</p>
          <p>Автор: {{ book.NAME }} {{ book.LASTNAME }}</p>
          <p>Мова: {{ book.LANGUAGE }}</p>
          <p>К-сть сторінок: {{ book.PAGE_AMOUNT }}</p>
        </div>
      </div>
      <div class="button-wrapper">
        <p>Додати до замовлення</p>
        <button type="button" v-on:click="addToOrder(book.ID)" class="btn btn-success">{{ book.PRICE }}.00 грн</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      books: [
        {
          ID: 1,
          TITLE: 'Книга 1',
          NAME: 'Іван',
          LASTNAME: 'Франко',
          LANGUAGE: 'Українська',
          PAGE_AMOUNT: 200,
          PRICE: 150,
          IMAGE_URL: 'https://cdn.27.ua/799/5e/4f/220751_1.jpeg',
        },
        {
          ID: 2,
          TITLE: 'Книга 2',
          NAME: 'Тарас',
          LASTNAME: 'Шевченко',
          LANGUAGE: 'Українська',
          PAGE_AMOUNT: 300,
          PRICE: 200,
          IMAGE_URL: 'https://readua.com/wp-content/uploads/2022/08/kobzar.png',
        },
        {
          ID: 3,
          TITLE: 'Книга 3',
          NAME: 'Леся',
          LASTNAME: 'Українка',
          LANGUAGE: 'Українська',
          PAGE_AMOUNT: 250,
          PRICE: 180,
          IMAGE_URL: 'https://book24.ua/upload/iblock/69f/69ffb64b73d10a22c8efc78ea48102dd.jpg',
        },
      ],
    };
  },
}
//
//    import axios from 'axios';
//
//    export default {
//        name: 'Books',
//        data() {
//            return{
//                books: '',
//            }
//        },
//        created() {
//            console.log('book')
//            axios.get(`http://localhost:8080/getBooks`, { withCredentials: true })
//                .then((response) => {this.books = response.data.books;})
//                .catch((error) => {console.log(error)})
//        },
//        methods:{
//            addToOrder(bookId){
//                axios.post('http://localhost:8080/addToOrder',
//                    JSON.stringify(bookId), { withCredentials: true } )
//            }
//        }
//    }
</script>
<style>
body {
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
}
.div {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.book-info {
  margin-left: 15px;
}

.img {
  width: 100px;
  height: 160px;
  margin-right: 20px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.button-wrapper {
  display:table-column;
}

.btn {
  width: 130px;
  border-color: #000;
  background-color: #000;
  color: #fff;
}

@media (max-width: 600px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .img {
    margin: 0 0 10px 0;
  }

  .button-wrapper {
    display:table-column;
    margin-top: 22px ;
  }

  .btn {
    width: 100%;
  }
}
</style>