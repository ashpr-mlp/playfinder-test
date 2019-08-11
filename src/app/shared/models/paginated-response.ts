export interface PaginatedResponseMeta {
    total_pages: number;
    total_items: number;
}

export interface PaginatedResponseLinks {
    first: string;
    self: string;
    next: string;
    last: string;
}

export interface PaginatedResponse<T> {
    meta: PaginatedResponseMeta;
    data: T[];
    links: PaginatedResponseLinks;
}
