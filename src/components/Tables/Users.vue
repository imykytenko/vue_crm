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
        <th scope="row">{{ user.ID }}</th>
        <td data-label="Ім'я">{{ user.NAME }}</td>
        <td data-label="Прізвище">{{ user.LASTNAME }}</td>
        <td data-label="Пошта">{{ user.EMAIL }}</td>
        <td data-label="Номер телефону">{{ user.PHONE }}</td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [
        {ID: 1, NAME: 'Іван', LASTNAME: 'Іванов', EMAIL: 'ivan.ivanov@example.com', PHONE: '123456789'},
        {ID: 2, NAME: 'Марія', LASTNAME: 'Марієва', EMAIL: 'mariaaaaa@example.com', PHONE: '987654321'},
        {ID: 3, NAME: 'Олексій', LASTNAME: 'Олексієнко', EMAIL: 'oleksiyOlex@example.com', PHONE: '456789123'},
        {ID: 4, NAME: 'Петро', LASTNAME: 'Петренко', EMAIL: 'petro.petrenkooo@example.com', PHONE: '654321789'},
      ],
      isAdmin: false,
    };
  },
}
// import axios from "axios";
//
// export default {
//     name: 'Users',
//     data(){
//         return{
//             users: '',
//             isAdmin: ''
//         }
//     },
//     created() {
//         axios.get(`http://localhost:8080/getUsers`, { withCredentials: true })
//             .then((response) => {this.users = response.data.users;})
//             .catch((error) => {console.log(error)})
//
//     }
// }
</script>

<style>
body {
  background-color: #f1f1f1;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.table {
  width: 1400px;
  background-color: #fff;
  color: #333;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #343a40;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
}

tbody tr {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

tbody tr:hover {
  background-color: #e9ecef;
  transform: translateY(-3px);
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary {
  border-radius: 5px;
  background-color: black;
  color: #fff;
}

.btn-primary:hover{
  background-color: #565e64;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

@media (max-width: 768px) {
  th, td {
    padding: 10px;
  }

  .table {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .table {
    width: 335px;
    font-size: 12px;
  }

  th, td {
    padding: 8px;
  }

  td {
    display: block;
    width: 100%;
  }

  th {
    display: none;
  }

  tr {
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }

  td:before {
    content: attr(data-label);
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
}
</style>