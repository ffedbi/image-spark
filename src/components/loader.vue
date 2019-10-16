<template lang="pug">
    .loader
</template>

<script>
    export default {
        name: 'loader'
    }
</script>

<style lang="scss" scoped>
    .loader {
		position: absolute;
		top: 50%;
		left: 50%;
        transform: translate(-50%, -50%);
        
		width: 5rem;
        height: 5rem;
        
		border: 3px solid transparent;
		border-left: 3px solid #42b983;
		border-radius: 50%;
		animation: load 0.5s infinite linear;
    }
    
	@keyframes load {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
</style>