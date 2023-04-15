<template>
    <div class="component">
        <div class="rounded elevation-3">
            <div class="">
                <img class="img-fluid rounded-top" :src="business.img" :alt='business.name' />
            </div>
            <h2 class="fs-3 p-3 clipped">{{ business.name }}</h2>
            <div class="d-flex justify-content-between px-3">
                <div class="">
                    <div>{{ business.address }}</div>
                    <div>{{ business.city }}</div>
                    <div>{{ business.state }} {{ business.zipCode }}</div>
                </div>
                <div class="pb-2">
                    <h3 class="font-yellow fs-4">{{ business.category }}</h3>
                    <h3 class="font-yellow fs-5">{{ business.rating }} stars</h3>
                    <div>{{ business.reviewCount }} reviews</div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    props: {
        business:
        {
            type: Object,
            required: true
        }
    },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.clipped {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.font-yellow {
    color: #CCA353;
    font-weight: 600;
}

img {
    height: 30vh;
    width: 100%;
    object-fit: cover;
}
</style>