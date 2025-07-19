//  client/src/App.tsx

const App = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      console.log(formData)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*,.mkv" name="video" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;