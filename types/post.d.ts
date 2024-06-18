// define type of post for typescript wordpress rest api
export type Post = {
    id: number;
    date: string;
    title: {
        rendered: string;
    };
    slug: string;
    excerpt: {
        rendered: string;
    };
    link: string;
    author: number;
    _embedded: any;
    content: {
        rendered: string;
    };
}