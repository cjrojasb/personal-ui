import TextField from "components/shared/TextField";

function InputPage() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl">Inputs</h2>
      <div className="w-96 flex flex-col gap-6">
        <TextField type="text" variant="filled" fullWidth label="username" />
        <TextField
          type="email"
          variant="outlined"
          label="email"
          helperText="Escribe tu correo"
          fullWidth
        />
      </div>
    </div>
  );
}

export default InputPage;
