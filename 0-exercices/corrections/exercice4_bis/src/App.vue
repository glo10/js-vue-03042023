<template>
	<ConvertView />
</template>

<script>
import ConvertView from '@/views/ConverterView.vue';
export default {
	name: 'App',
	components: {
		ConvertView
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

body {
	background-color: aliceblue;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
}

.heading {
	font-family: 'Pacifico', cursive;
	margin: 35px auto 20px;
}

hr {
	border-top: 2px solid black;
	width: 40%;
	margin-bottom: 55px;
}

.main {
	width: 50vw;
	margin: auto;
	padding: 30px;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
}

label {
	font-size: 20px;
}

.btn {
	width: 200px;
}

#finalAmount {
	font-family: 'Lobster', cursive;
	margin-right: 10px;
	margin-left: 10px;
}

#finalAmount h2 {
	font-size: 2rem;
}

#finalAmount h2>span {
	color:#13b6e8;
}

.finalValue {
	font-family: 'Amiri', serif;
	font-size: 2.5rem;
}

footer p {
	text-align: center;
}

@media (max-width: 768px) {
	hr {
		width: 60%;
	}

	.main {
		width: 100%;
	}
}

@media (max-width: 400px) {
	.heading {
		font-size: 60px;
	}

	hr {
		width: 75%;
	}

	#finalAmount h2,
	.finalValue {
		font-size: 40px;
	}
}</style>
