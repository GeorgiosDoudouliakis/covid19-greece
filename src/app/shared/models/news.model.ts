export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string | null;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface News {
    status: string;
    articles: Article[];
    totalResults: number;
}