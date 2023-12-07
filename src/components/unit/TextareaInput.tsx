export default function TextareaInput({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-8 mt-8 w-full place-items-center">
      <div className="divider mx-auto w-4/5">{title}</div>
      <textarea
        placeholder="Answer"
        className="textarea textarea-bordered border-primary textarea-md w-full max-w-md"
      ></textarea>
      <button className="btn btn-active btn-primary">Save</button>
    </div>
  );
}
