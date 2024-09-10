import * as yup from "yup";

const userSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres.")
    .required("A senha é obrigatória"),
});



export {
    userSchema,

}