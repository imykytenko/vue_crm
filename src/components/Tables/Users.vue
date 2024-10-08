<template>
    <div class="tab">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Ім'я</th>
                    <th scope="col">Прізвище</th>
                    <th scope="col">Пошта</th>
                    <th scope="col">Номер телефону</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.ID">
                    <th scope="row">{{user.ID}}</th>
                    <td>{{user.NAME}}</td>
                    <td>{{user.LASTNAME}}</td>
                    <td>{{user.EMAIL}}</td>
                    <td>{{user.PHONE}}</td>
                </tr>

                </tbody>
            </table>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Users',
        data(){
            return{
                users: '',
                isAdmin: ''
            }
        },
        created() {
            axios.get(`http://localhost:8080/getUsers`, { withCredentials: true })
                .then((response) => {this.users = response.data.users;})
                .catch((error) => {console.log(error)})

        }
    }
</script>

<style>
body {
  background-color: #f8f9fa;
  color: #333;
  font-family: Arial, sans-serif;
}

.table {
  width: 100%;
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