import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  rating: yup.number().required().min(1).max(5),
  comment: yup.string().required(),
}).required();

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  type FormData = {
    firstName: string;
    email: string;
    rating: number;
    comment: string
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-xl mb-12 font-bold">Feedback Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="firstName"
                className={`block font-bold text-lg mb-2 ${errors.firstName ? "text-red-400" : "text-purple-400"
                  }`}
              >
                First Name
              </label>
              
              <input {...register("firstName")} className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${errors.firstName
                ? "text-red-300 border-red-400"
                : "text-purple-200 border-purple-400"
                }`}
                type="firstName"
                name="firstName"
                id="firstName"
              />
              <p>{errors.firstName?.message}</p>
              
            </div>
            <div className="mb-8">
              <label
                htmlFor="email"
                className={`block font-bold text-lg mb-2 ${errors.email ? "text-red-400" : "text-purple-400"
                  }`}
              >
                Email
              </label>
              <input {...register("email")} className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${errors.email
                ? "text-red-300 border-red-400"
                : "text-purple-200 border-purple-400"
                }`}
                type="email"
                name="email"
                id="email"
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="mb-8">
              <label
                htmlFor="rating"
                className={`block font-bold text-lg mb-2 ${errors.rating ? "text-red-400" : "text-purple-400"
                  }`}
              >
                Rating
              </label>
              <input {...register("rating")} className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${errors.rating
                ? "text-red-300 border-red-400"
                : "text-purple-200 border-purple-400"
                }`}
                type="number"
                name="rating"
                id="rating"
              />
              <p>{errors.rating?.message}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="comment"
                className={`block font-bold text-lg mb-2 ${errors.comment ? "text-red-400" : "text-purple-400"
                  }`}
              >
                Comment
              </label>
              <input {...register("comment")} className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${errors.comment
                ? "text-red-300 border-red-400"
                : "text-purple-200 border-purple-400"
                }`}
                type="number"
                name="comment"
                id="comment"
              />
              <p>{errors.comment?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            className="inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-lg w-full md:w-24"
          />
        </div>
      </form>
    </>
  );
}