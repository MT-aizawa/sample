// src/App.tsx
import * as React from "react";
import { useState } from "react";
import { useApi, apiRequest } from "./useApi";
import {
  Button,
  Spinner,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHeaderCell,
  Textarea,
  Field,
} from "@fluentui/react-components";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function App() {
  const [userId, setUserId] = useState("1");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { data, loading, error, refetch } = useApi<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  // 新規投稿
  const handleCreate = async () => {
    try {
      await apiRequest<Post>("https://jsonplaceholder.typicode.com/posts", "POST", {
        title,
        body,
        userId: Number(userId),
      });
      alert("Post created!");
      refetch();
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  // 投稿更新（例: 最初の投稿を更新）
  const handleUpdate = async (id: number) => {
    try {
      await apiRequest<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, "PUT", {
        title: title || "Updated title",
        body: body || "Updated body",
        userId: Number(userId),
      });
      alert("Post updated!");
      refetch();
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  // 投稿削除
  const handleDelete = async (id: number) => {
    try {
      await apiRequest(`https://jsonplaceholder.typicode.com/posts/${id}`, "DELETE");
      alert("Post deleted!");
      refetch();
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 900 }}>
      <h2>Fluent UI v9 + REST API (GET / POST / PUT / DELETE)</h2>
     <Field label="userID"></Field>
      <Textarea
        
        value={userId}
        onChange={(_, data) => setUserId(data.value)}
        style={{ marginBottom: 10 }}
      />
   
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <Field label="title"></Field>
        <Textarea
        
          value={title}
          onChange={(_, data) => setTitle(data.value)}
        />
        <Field label="body"></Field>
        <Textarea
      
          value={body}
          onChange={(_, data) => setBody(data.value)}
        />
        <Button appearance="primary" onClick={handleCreate}>
          Create
        </Button>
      </div>

      {loading && <Spinner label="Loading..." />}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      {data && (
        <Table aria-label="Posts Table">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Body</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => handleUpdate(post.id)}>
                    Update
                  </Button>
                  <Button
                    size="small"
                    appearance="secondary"
                    onClick={() => handleDelete(post.id)}
                    style={{ marginLeft: 5 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}


