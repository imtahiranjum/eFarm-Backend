import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    profile_image: {
      type: String,
      default:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9ImJvZHlfMSIgd2lkdGg9IjE2MTIiIGhlaWdodD0iMTYxMiI+Cgo8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggIGlkPSIxIj4KCiAgICAgICAgICAgIDxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMEw0MDAwIDBMNDAwMCA0MDAwTDAgNDAwMHoiIC8+ICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgICAgICAgICAgIDxjbGlwUGF0aCAgaWQ9IjIiPgoKICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA0MDAwTDAgMEw0MDAwIDBMNDAwMCA0MDAweiIgLz4gICAgICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+CjwvZGVmcz4KCjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMzMzMzMzNCAwIDAgMS4zMzMzMzM0IDAgMCkiPgogICAgPHBhdGggZD0iTTAgMEwxMjA5IDBMMTIwOSAxMjA5TDAgMTIwOXoiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPgoJPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zMDIyNSAwIDAgLTAuMzAyMjUgLTAgMTIwOSkiIGNsaXAtcGF0aD0idXJsKCMxKSIgPgoJCTxnPgoJCTwvZz4KCQk8Zz4KCQk8L2c+CgkJPGc+CgkJPC9nPgoJCTxnPgoJCTwvZz4KCQk8Zz4KCQkJPGc+CgkJCQk8ZyBjbGlwLXBhdGg9InVybCgjMikiID4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAwMCAwTDAgMEwwIDQwMDBMNDAwMCA0MDAwTDQwMDAgMHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTM1LjczIDIwODQuNDRDIDE2NjcuOTQgMTk5NC4wOCAxODI3LjkzIDE5NDEuMzc5OSAyMDAwLjEgMTk0MS4zNzk5QyAyMTcyLjI2IDE5NDEuMzc5OSAyMzMyLjA2IDE5OTQuMDggMjQ2NC4yNyAyMDg0LjQ0QyAyNjgxLjcxIDIyMzIuODE5OCAyODI0LjM5IDI0ODIuOCAyODI0LjM5IDI3NjUuODdDIDI4MjQuMzkgMzIyMS4yOTIgMjQ1NS4zMyAzNTkwLjM1MSAyMDAwLjEgMzU5MC4zNTFDIDE1NDQuNjcgMzU5MC4zNTEgMTE3NS42MSAzMjIxLjI5MiAxMTc1LjYxIDI3NjUuODdDIDExNzUuNjEgMjQ4Mi44IDEzMTguMjkgMjIzMy4wMiAxNTM1LjczIDIwODQuNDR6TTI2MjEuMjEgMjAwOC41NEMgMjQ1Mi4xIDE4NjkuNjU5OSAyMjM1LjggMTc4Ni4zNDAxIDIwMDAuMSAxNzg2LjM0MDFDIDE3NjQuMiAxNzg2LjM0MDEgMTU0Ny45MSAxODY5LjY1OTkgMTM3OC45NyAyMDA4LjU0QyAxMDA0LjU5IDE3OTMuMTkgNzUyLjUyNiAxMzg5LjEyOTkgNzUyLjUyNiA5MjYuMjhDIDc1Mi41MjYgMjM3LjQzOTk0IDMyNDcuNDcgMjM3LjQzOTk0IDMyNDcuNDcgOTI2LjI4QyAzMjQ3LjQ3IDEzODkuMTI5OSAyOTk1LjQxIDE3OTMuMTkgMjYyMS4yMSAyMDA4LjU0eiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIC8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+",
    },

    bio: {
      type: String,
    },

    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OnSaleCattle",
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
