<template>
  <div class="container">
    <div v-for="author in author" :key="author.ID" class="author-card">
      <table class="table table-striped">
        <tbody>
        <tr>
          <th scope="row">Ім'я</th>
          <td>{{ author.NAME }}</td>
        </tr>
        <tr>
          <th scope="row">Прізвище</th>
          <td>{{ author.LASTNAME }}</td>
        </tr>
        <tr>
          <th scope="row">Номер телефону</th>
          <td>{{ author.PHONE }}</td>
        </tr>
        <tr>
          <th scope="row">Пошта</th>
          <td>{{ author.EMAIL }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="logout">Вийти</button>
    <h3 class="text-center">Мої заявки</h3>
    <div class="application-container" v-for="application in application" :key="application.ID">
      <div class="application-card">
        <div class="title">{{ application.BOOK_TITLE }}</div>
        <div class="status">{{ application.STATUS }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

    export default {
        name: 'AuthorAcc',
        data(){
            return{
                author: '',
                application: ''
            }
        },
        created() {
            axios.get(`http://localhost:8080/getAllAuthorInf`, { withCredentials:
                    true })
                .then((response) => {this.author = response.data.author;
                    this.application = response.data.application})
                .catch((error) => {console.log(error)})
        },
        methods:{
            logout(){
                axios.post(`http://localhost:8080/logout`,'',{ withCredentials:
                        true })
                    .catch((error) => {console.log(error)})
                this.$router.push("/");
            }

        }
    }
</script>

<style>
body {
  background-color: #f8f9fa;
  color: #333;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.author-card, .application-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.author-card:hover, .application-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.title {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5px;
}

.status {
  color: #555;
}

.application-container {
  display: flex;
  flex-direction: column;
}
</style>
