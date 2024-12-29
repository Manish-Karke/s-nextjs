"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";

const StartUpForm = () => {
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [pitch, setPitch] = useState("**Set ur idea here**");
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!category.trim()) newErrors.category = "Category is required.";
    if (!link.trim()) newErrors.link = "Image URL is required.";
    if (!pitch.trim()) newErrors.pitch = "Pitch is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted with:", {
        title,
        description,
        category,
        link,
        pitch,
      });
      // Perform form submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Startup Title"
        />
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="Description"
          name="Description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup category(ai, ml, web, mobile)"
        />
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="LINK"
          name="LINK"
          className="startup-form_input"
          required
          placeholder="Startup image URL"
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: "20px solid #ccc", overflow: "hidden" }}
          textareaProps={{
            placeholder: "Write your pitch here",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>

      <button type="submit" className="startup-form_button">
        Submit
      </button>
      <style jsx>{`
        .startup-form {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
        }
      `}</style>
    </form>
  );
};

export default StartUpForm;
