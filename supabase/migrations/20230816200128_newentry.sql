drop table "public"."emotions";

create table "public"."emotions" (
    "diary_id" bigint not null,
    "name" character varying not null,
    "intensity" smallint not null
);


alter table "public"."emotions" enable row level security;

create table "public"."emotions_options" (
    "id" bigint generated by default as identity not null,
    "name" character varying not null
);


alter table "public"."emotions_options" enable row level security;

create table "public"."symptoms_options" (
    "id" bigint generated by default as identity not null,
    "name" character varying not null
);


alter table "public"."symptoms_options" enable row level security;

CREATE UNIQUE INDEX emotions_options_name_key ON public.emotions_options USING btree (name);

CREATE UNIQUE INDEX emotions_options_pkey ON public.emotions_options USING btree (id);

CREATE UNIQUE INDEX symptoms_options_name_key ON public.symptoms_options USING btree (name);

CREATE UNIQUE INDEX symptoms_options_pkey ON public.symptoms_options USING btree (id);

CREATE UNIQUE INDEX emotions_pkey ON public.emotions USING btree (diary_id, name);

alter table "public"."emotions" add constraint "emotions_pkey" PRIMARY KEY using index "emotions_pkey";

alter table "public"."emotions_options" add constraint "emotions_options_pkey" PRIMARY KEY using index "emotions_options_pkey";

alter table "public"."symptoms_options" add constraint "symptoms_options_pkey" PRIMARY KEY using index "symptoms_options_pkey";

alter table "public"."emotions" add constraint "emotions_diary_id_fkey" FOREIGN KEY (diary_id) REFERENCES diary(id) ON DELETE CASCADE not valid;

alter table "public"."emotions" validate constraint "emotions_diary_id_fkey";

alter table "public"."emotions_options" add constraint "emotions_options_name_key" UNIQUE using index "emotions_options_name_key";

alter table "public"."symptoms_options" add constraint "symptoms_options_name_key" UNIQUE using index "symptoms_options_name_key";

create policy "Enable insert for users based on user_id"
on "public"."diary"
as permissive
for insert
to public
with check ((auth.uid() = user_id));


create policy "Enable insert for authenticated users only"
on "public"."emotions"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."emotions"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."emotions_options"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."symptoms"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."symptoms_options"
as permissive
for select
to public
using (true);


