import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("An error occurred. Please check your search criteria and try again !");
function ErrorMessage() {
  return (
    <>
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div>
    </>
  );
}

export default ErrorMessage;
