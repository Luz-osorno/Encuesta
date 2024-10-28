const app = Vue.createApp({
    data() {
        return {
            titulo: "Encuesta de Programación",
            preguntaPrincipal: "¿Te gusta programar?",
            gustaProgramar: '', 
            aniosProgramando: '', 
            experienciaProgramando: '', 
            lenguajes: [], 
            lenguajeActual: '' 
        }
    },
    methods: {
        reiniciarPreguntas() {
            if (this.gustaProgramar === 'no') {
                this.aniosProgramando = '';
                this.experienciaProgramando = '';
                this.lenguajes = [];
                this.lenguajeActual = '';
            }
        },
        agregarLenguaje() {
            if (this.lenguajeActual) {
                this.lenguajes.push(this.lenguajeActual);
                this.lenguajeActual = ''; 
            }
        }
    }
});

app.mount('#app');