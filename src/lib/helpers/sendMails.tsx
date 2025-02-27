"use server";
import WebinarEmail from "@/emails/Email";
import ImmediateFollowUpMail from "@/emails/ImmediateFollowUpMail";
import ReminderEmail from "@/emails/Reminder";
import { Resend } from "resend";

export async function sendWebinarMail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const resend = new Resend("re_9JcQKqEZ_HNQmGA8v1dEab32EQxhGK9qc");

  try {
    const response = await resend.emails.send({
      from: "HostSpaceNG <cloud@hostspaceng.com>",
      to: email,
      subject: "HostSpace Product Launch",
      react: <WebinarEmail firstName={name} />,
    });
    return response;
  } catch (err) {
    console.error("Error sending email:", err);
  }
}
export async function sendWebinarReminder({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const resend = new Resend("re_9JcQKqEZ_HNQmGA8v1dEab32EQxhGK9qc");

  try {
    const response = await resend.emails.send({
      from: "HostSpaceNG <cloud@hostspaceng.com>",
      to: email,
      subject: "The countdown is over...HostSpace Product Launch is TODAY",
      react: <ReminderEmail firstName={name} />,
    });
    return response;
  } catch (err) {
    console.error("Error sending email:", err);
  }
}
export async function ImmediateFollowUp({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const resend = new Resend("re_9JcQKqEZ_HNQmGA8v1dEab32EQxhGK9qc");

  try {
    const response = await resend.emails.send({
      from: "HostSpaceNG <cloud@hostspaceng.com>",
      to: email,
      subject: "Thank You for Joining the HostSpace Webinar! 🎉",
      react: <ImmediateFollowUpMail firstName={name} />,
    });
    return response;
  } catch (err) {
    console.error("Error sending email:", err);
  }
}
