create table
  public.articles (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone null default now(),
    title character varying not null,
    content text not null,
    description text not null,
    image text not null default '/images/peopletalking.jpg'::text,
    constraint articles_pkey primary key (id)
  ) tablespace pg_default;