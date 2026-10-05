"use client";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, { message: "Companion is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  topic: z.string().min(1, { message: "Topic is required" }),
  voice: z.string().min(1, { message: "Voice is required" }),
  style: z.string().min(1, { message: "Style is required" }),
  duration: z.coerce.number().min(1, { message: "Duration is required" }),
});

function CompanionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: standardSchemaResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("onSubmit", data);
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-8"}>
        {/*companion name*/}
        <FieldGroup>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-name">Name</FieldLabel>
                <Input
                  {...field}
                  id="form-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter the companion name"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/*companion subject*/}
        <FieldGroup>
          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-subject">
                  Companion Subject
                </FieldLabel>
                <Select
                  {...field}
                  id="form-subject"
                  aria-invalid={fieldState.invalid}
                  value={field.value}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className={"input capitalize"}>
                    <SelectValue placeholder={"Select the subject"} />
                  </SelectTrigger>
                  <SelectContent>
                      {subjects.map((subject) => (
                      <SelectItem
                        value={subject}
                        key={subject}
                        className={"capitalize"}
                      >
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/*companion topic*/}
        <FieldGroup>
          <Controller
            name="topic"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  What should the companion help with?
                </FieldLabel>
                <Textarea
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Ex. Derivaties & Integrals"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/*companion voice*/}
        <FieldGroup>
          <Controller
            name="voice"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-style">
                  Companion Voice
                </FieldLabel>
                <Select
                  {...field}
                  id="form-style"
                  aria-invalid={fieldState.invalid}
                  value={field.value}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className={"input"}>
                    <SelectValue placeholder={"Select the voice"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"male"} className={"capitalize"}>
                      Male
                    </SelectItem>
                    <SelectItem value={"female"} className={"capitalize"}>
                      Female
                    </SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/*companion style*/}
        <FieldGroup>
          <Controller
            name="style"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-style">
                  Companion Style
                </FieldLabel>
                <Select
                  {...field}
                  id="form-style"
                  aria-invalid={fieldState.invalid}
                  value={field.value}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className={"input"}>
                    <SelectValue placeholder={"Select the style"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"formal"} className={"capitalize"}>
                      Formal
                    </SelectItem>
                    <SelectItem value={"casual"} className={"capitalize"}>
                      Casual
                    </SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/*session duration*/}
        <FieldGroup>
          <Controller
            name="duration"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Session duration (in minutes)
                </FieldLabel>
                <Input
                  {...field}
                  type={"number"}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="15"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button type={"submit"} className={"w-full cursor-pointer"}>
          Build Your Companion
        </Button>
      </form>
    </div>
  );
}

export default CompanionForm;
