<template>
  <div class="tab">
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Автор</th>
        <th scope="col">Назва книги</th>
        <th scope="col">Статус</th>
        <th scope="col">Дія</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="application in applications" :key="application.ID" class="table-row">
        <th scope="row">{{application.ID}}</th>
        <td>{{application.NAME}} {{application.LASTNAME}}</td>
        <td>{{application.BOOK_TITLE}}</td>
        <td>
          <select class="form-select" v-model="application.STATUS">
            <option value="НОВА">НОВА</option>
            <option value="ВІДХИЛЕНА">ВІДХИЛЕНА</option>
            <option value="ПРИЙНЯТА">ПРИЙНЯТА</option>
            <option value="ОПУБЛІКОВАНА">ОПУБЛІКОВАНА</option>
          </select>
        </td>
        <td class="buttons">
          <button v-on:click="save(application.ID, application.STATUS)" class="btn btn-primary">
            Зберігти
          </button>
          <button v-if="application.STATUS === 'ПРИЙНЯТА'" v-on:click="addBook(application.ID)" class="btn btn-success">
            Додати у каталог
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
  name: 'Applications',
  data() {
    return {
      applications: '',
    };
  },
  created() {
    axios.get(`http://localhost:8080/getApplications`, { withCredentials: true })
        .then((response) => {
          this.applications = response.data.applications;
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods: {
    save(id, status) {
      axios.post(`http://localhost:8080/saveStatus`,
          JSON.stringify({ id, status }), { withCredentials: true }
      );
    },
    addBook(appId) {
      axios.post(`http://localhost:8080/addBook`,
          JSON.stringify({ appId }), { withCredentials: true }
      );
      this.$router.go('/ApplicationsTable');
    }
  }
};
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

.form-select {
  border: 1px solid #000;
  background-color: #fff;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}

.form-select:hover {
  background-color: #000;
  color: #fff;
}

.btn {
  font-size: 13px;
  margin: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.btn-primary {
  background-color: #333;
  color: #fff;
}

.btn-primary:hover {
  background-color: #000;
}

.btn-success {
  background-color: #28a745;
  color: #fff;
}

.btn-success:hover {
  background-color: #218838;
}

.tab {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
}

.buttons {
  display: flex;
}
</style>