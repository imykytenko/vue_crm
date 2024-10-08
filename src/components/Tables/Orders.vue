<template>
    <div class="tab">
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID користувача</th>
                    <th scope="col">Назва книги</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="order in orders" :key="order.USER_ID">
                    <td>{{order.USER_ID}}</td>
                    <td>{{order.TITLE}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Orders',
        data(){
            return{
                orders: '',
                isAdmin: ''
            }
        },
        created() {
            axios.get(`http://localhost:8080/getOrders`, { withCredentials: true })
                .then((response) => {this.orders = response.data.orders;})
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