import { fetchRedis } from "@/(chat)/helpers/redis";
import { authOptions } from "@/(chat)/lib/auth";
import { messageArrayValidator } from "@/(chat)/lib/validation/message";
import { notFound } from "next/navigation";
import ChatInput from "@/(chat)/components/ChatInput";
import Messages from "@/(chat)/components/Messages";
import ChattingPersonNameHeading from "@/(chat)/components/ChattingPersonNameHeading";
import { useCurrentUser } from "@/(auth)/hooks/use-current-user";
interface pageProps {
  params: {
    chatId: string;
  };
}
const user = useCurrentUser();

async function getChatMessages(chatId: string) {
  try {
    const result: string[] = await fetchRedis(
      "zrange",
      `chat:${chatId}:messages`,
      0,
      -1
    );
    const dbMessages = result.map((message) => JSON.parse(message) as Message);

    const ReversedDbMessages = dbMessages.reverse();

    const messages = messageArrayValidator.parse(ReversedDbMessages);

    return messages;
  } catch (e) {
    notFound();
  }
}

const Page = async ({ params }: pageProps) => {
  const { chatId } = params;
  const [userId1, userId2] = chatId.split("--");

  if (userId1 !== user?.id) {
    notFound();
  }

  if (userId1 === userId2) {
    notFound();
  }

  const chatPartnerId = userId1 === user.id ? userId2 : userId1;
  const chatPartnerString = (await fetchRedis(
    "get",
    `user:${chatPartnerId}`
  )) as string;
  const chatPartner = JSON.parse(chatPartnerString) as User;
  const initialMessages = await getChatMessages(chatId);

  return (
    <div
      className="flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 
             h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4.5rem)] md:h-screen lg:h-screen xl:h-screen"
    >
      <div className="fixed w-full z-10 bg-white shadow">
        <ChattingPersonNameHeading chatPartner={chatPartner} chatId={chatId} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Messages
          chatId={chatId}
          initialMessages={initialMessages}
          chatPartner={chatPartner}
          sessionId={user.id}
          sessionImg={user.image}
        />
      </div>

      <ChatInput chatId={chatId} userId={user.id} chatPartner={chatPartner} />
    </div>
  );
};

export default Page;
