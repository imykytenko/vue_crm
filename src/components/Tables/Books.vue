<template>
  <div class="tab">
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Назва</th>
        <th scope="col">Автор</th>
        <th scope="col">Мова</th>
        <th scope="col">К-сть сторінок</th>
        <th scope="col">Ціна</th>
        <th scope="col">Дія</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book in books" :key="book.ID">
        <th scope="row">{{ book.ID }}</th>
        <td data-label="Назва"><input type="text" v-model="book.TITLE"/></td>
        <td data-label="Автор">{{ book.NAME }} {{ book.LASTNAME }}</td>
        <td data-label="Мова"><input type="text" v-model="book.LANGUAGE"/></td>
        <td data-label="К-сть сторінок"><input type="text" v-model="book.PAGE_AMOUNT"/></td>
        <td data-label="Ціна"><input type="text" v-model="book.PRICE"/></td>
        <td data-label="Дія" class="buttons">
          <button type="button" class="btn btn-primary"
                  @click="save(book.ID, book.TITLE, book.LANGUAGE, book.PAGE_AMOUNT, book.PRICE)">
            Зберегти
          </button>
          <button type="button" class="btn btn-danger" @click="del(book.ID)">
            Видалити
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios';

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
        },
        {
          ID: 2,
          TITLE: 'Книга 2',
          NAME: 'Тарас',
          LASTNAME: 'Шевченко',
          LANGUAGE: 'Українська',
          PAGE_AMOUNT: 300,
          PRICE: 200,
        },
        {
          ID: 3,
          TITLE: 'Книга 3',
          NAME: 'Леся',
          LASTNAME: 'Українка',
          LANGUAGE: 'Українська',
          PAGE_AMOUNT: 250,
          PRICE: 180,
        },
      ],
    };
  },
  methods: {
    save(bId, bTitle, bLanguage, bPageAmount, bPrice) {
      console.log('Збережено книгу з ID:', bId);
    },
    del(bookId) {
      this.books = this.books.filter((book) => book.ID !== bookId);
    },
  },
};
//
// export default {
//     name: 'Books',
//     data() {
//         return{
//             books: '',
//             isAdmin: ''
//         }
//     },
//     created() {
//         axios.get(`http://localhost:8080/isAdmin`, { withCredentials: true })
//             .then((response) => {this.isAdmin = response.data.isAdmin;})
//             .catch((error) => {console.log(error)})
//
//         axios.get(`http://localhost:8080/getBooks`, { withCredentials: true })
//             .then((response) => {this.books = response.data.books;})
//             .catch((error) => {console.log(error)})
//     },
//     methods: {
//         save(bId, bTitle, bLanguage, bPageAmount, bPrice){
//             axios.post(`http://localhost:8080/saveBook`,
//                 JSON.stringify({bId, bTitle, bLanguage,
//                     bPageAmount, bPrice}), { withCredentials: true }
//             );
//
//
//         },
//         del(bookId){
//             axios.post(`http://localhost:8080/deleteBook`,
//                 JSON.stringify({bookId}), { withCredentials: true }
//             );
//             this.$router.go('/BooksTable');
//
//         }
//     }
// }

</script>

<style>
body {
  background-color: #f8f9fa;
  color: #333;
  font-family: Arial, sans-serif;
}

.table {
  width: 1400px;
  background-color: #fff;
  color: #333;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}

tbody tr {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

tbody tr:hover {
  background-color: #f1f1f1;
  transform: translateY(-3px);
}

.tab {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
}

</style>