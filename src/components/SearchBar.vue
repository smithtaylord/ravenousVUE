<template>
    <div class="component">
        <div class="SearchBar">
            <div class="SearchBar-sort-options">
                <ul class="d-flex justify-content-center">
                    <li @click="sort('best_match')" :class="sortBy == 'best_match' ?
                        'px-5 active' : 'px-5'">Best Match</li>
                    <li @click="sort('rating')" :class="sortBy == 'rating' ?
                        'px-5 active' : 'px-5'">Highest Rated</li>
                    <li @click="sort('review_count')" :class="sortBy == 'review_count' ?
                        'px-5 active' : 'px-5'">Most Reviewed</li>

                </ul>
            </div>
            <div class="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div class="SearchBar-submit">
                <button class="btn" onClick={this.handleSearch}>Let's Go</button>
            </div>
        </div>

    </div>
</template>


<script>
import { ref } from 'vue';

export default {
    setup() {
        const sortBy = ref('best_match')
        return {
            sortBy,
            sort(category) {
                sortBy.value = category
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.SearchBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('../../Public/background_search_desktop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 25rem;
}

.SearchBar-sort-options ul {
    // display: flex;
    // justify-content: center;
    margin-bottom: 2.22rem;
    color: #ffffff;
}

.SearchBar-sort-options li {
    cursor: pointer;
    // width: 4.33rem;
    border-bottom: 1px solid #fff;
    padding: 0 2.58rem .33rem 2.58rem;
    line-height: 1.13;
    text-align: center;
    font-weight: 600;
    font-size: .83rem;
    transition: color .25s;
    list-style-type: none;
}

.SearchBar-sort-options li:hover {
    color: #d4cfcf;
}

.SearchBar-sort-options li.active,
.SearchBar-sort-options li.active:hover {
    border-bottom: 1px solid #f0c36c;
    color: #f0c36c;
}

.SearchBar-fields {
    display: flex;
    justify-content: center;
    margin-bottom: 2.88rem;
}

.SearchBar-fields input {
    width: 21rem;
    padding: .66rem 1rem;
    margin-right: 2.22rem;
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: .77rem;
    font-weight: 500;
}

.SearchBar-fields input:last-child {
    margin-right: 0;
}

.SearchBar-submit {
    text-align: center;
}

.SearchBar-submit button {
    border-radius: 4px;
    padding: .72rem 1.7rem;
    background-color: #cca353;
    color: #ffffff;
    font-weight: 600;
    transition: background-color .5s;
}

.SearchBar-submit button:hover {
    cursor: pointer;
    background-color: #a7874b;
}

@media only screen and (max-width: 560px) {
    .SearchBar {
        background-image: url('../../Public/background_search_mobile.jpg');
    }

    .SearchBar-sort-options ul {
        margin-left: 2rem;
        margin-right: 2rem;
    }

    .SearchBar-fields {
        flex-direction: column;
        align-items: center;
    }

    .SearchBar-fields input {
        margin-right: 0;
        margin-bottom: .86rem;
    }
}
</style>