// src/emailConfig.ts
// @ts-ignore
import emailjs from 'emailjs-com';

export const sendEmail = (form: HTMLFormElement): Promise<any> => {
  return emailjs.sendForm(
    "service_4yg12dp",
    'template_436e9dr',
    form,
    'K-8uwDqXUVmsdV_m9'
  );
};


// emailjs.send("service_4yg12dp","template_436e9dr",{
//     from_name: "kavin",
//     to_name: "kisvinth",
//     phone_number: "9345679266",
//     message: "Hi",
//     reply_to: "Nothing",
//     });