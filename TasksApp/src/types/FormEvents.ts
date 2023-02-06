import { ChangeEvent, FormEvent } from "react";

export type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export type HandleSubmit = FormEvent<HTMLFormElement>;
