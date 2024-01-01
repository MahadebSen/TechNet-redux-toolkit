import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import {
  useGetCommentsQuery,
  usePostCommentMutation,
} from '@/redux/features/products/productApi';

interface IProps {
  id: string | undefined;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [postComment, { isLoading, isError, error }] = usePostCommentMutation();
  const { data } = useGetCommentsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000, //30 minute
  });

  console.log({ isLoading, isError, error }, data);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    const option = {
      id,
      data: { comment: inputValue },
    };
    postComment(option);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="xl:max-w-7xl xl:mx-auto m-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
