/**
 * WordPress Composables
 * A collection of composable functions for WordPress.
*/

import { type Post } from '~~/types/post'

export default () => {

    // const config = useRuntimeConfig()
    // const WP_URL = config.public.wpUri

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${process.env.VITE_WP_URI}/wp-json/wp/v2/${endpoint}`)
    }

    // Get all posts
    const getPosts = async (
        category?: number,
        page: number = 1,
        perPgae: number = 20,
        fields: string = 'author,id,excerpt,title,link,slug,date',
    ) => {
        let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
        if (category) {
            query += `&categories=${category}`;
        }
        console.log(process.env.VITE_WP_URI)
        return get<Post[]>(query);
    }

    // Get a single post
    const getPost = async (slug: string) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`);
    }

    // get all categories
    const getCategories = async (fields: string = "name,slug,count") => {
        return get<any>(`categories`);
    }

    // get a single category
    const getCategory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`);
    }

    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory,
    }

}