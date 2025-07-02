import { model, Schema } from "mongoose";

// Component Schema
const componentSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    variant: String,
    order: {
      type: Number,
      required: true,
    },
    props: {
      type: Schema.Types.Mixed,
      default: {},
    },
    styling: {
      type: Schema.Types.Mixed,
      default: {},
    },
    react_code: String,
  },
  { _id: false }
);

// Page Schema
const pageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    meta: {
      title: String,
      description: String,
      keywords: String,
    },
    custom_scripts: String,
    components: [componentSchema],
  },
  { _id: false }
);

// Project Schema
const projectSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    template_used: String,
    is_exported: {
      type: Boolean,
      default: false,
    },
    export_count: {
      type: Number,
      default: 0,
    },
    last_export: Date,
    settings: {
      favicon: String,
      global_meta: {
        site_title: String,
        site_description: String,
        og_image: String,
      },
      theme: {
        primary_color: String,
        secondary_color: String,
        accent_color: String,
        text_primary: String,
        text_secondary: String,
        background: String,
        font_family: String,
        font_headings: String,
      },
      custom_css: String,
    },
    pages: [pageSchema],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);

export default Project;
