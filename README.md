🧠 Todo Summary Assistant

A full-stack application to create, manage, and summarize personal to-do items using a real LLM (Cohere) and send summaries to a Slack channel.

---

🚀 Project Features

- Add, edit, delete, and view personal to-do items.
- Generate a summary of current to-dos using Cohere (LLM API).
- Post the generated summary to a Slack channel via Incoming Webhook.
- Show success/failure messages for Slack summary posting.

---

⚙️ Stack Used

| Layer      | Tech Used               |
|------------|-------------------------|
| Frontend   | React                   |
| Backend    | Node.js + Express       |
| Database   | Supabase (PostgreSQL)   |
| LLM        | Cohere API              |
| Messaging  | Slack Incoming Webhooks |

---

🧱 Folder Structure

```
todo-summary-assistant/
├── client/               # React Frontend
│   └── src/
│       ├── components/   # Todo UI components
│       ├── services/     # API interactions
│       ├── App.js
│       └── index.js
├── server/               # Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── services/         # Cohere & Slack integration
│   ├── db/
│   ├── .env.example
│   └── server.js
```

---

🛠️ Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-summary-assistant.git
cd todo-summary-assistant
```

---

2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=5000

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-supabase-service-role-key

COHERE_API_KEY=your-cohere-api-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

Start the backend server:

```bash
node server.js
```

---

3. Supabase Setup

- Go to [https://app.supabase.com](https://app.supabase.com)
- Create a new project
- Go to **SQL Editor** and run:

```sql
create extension if not exists "uuid-ossp";

create table todos (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  created_at timestamp with time zone default now()
);
```

- Go to Table Editor and **disable RLS** for the `todos` table.

---

 4. Frontend Setup

```bash
cd ../client
npm install
npm start
```

---

 🔐 LLM Setup (Cohere)

1. Go to [https://dashboard.cohere.com/api-keys](https://dashboard.cohere.com/api-keys)
2. Copy your API key
3. Add it to your `.env` as `COHERE_API_KEY`

We use Cohere's `command-r-plus` model to summarize the todo list.

---

 📣 Slack Webhook Setup

1. Go to [Slack Incoming Webhooks](https://api.slack.com/messaging/webhooks)
2. Click **Create App** → From Scratch
3. Enable Webhooks and generate a new **Incoming Webhook URL**
4. Paste it in your `.env` file as `SLACK_WEBHOOK_URL`

---

 🔗 API Endpoints

| Method | Route            | Description                     |
|--------|------------------|---------------------------------|
| GET    | `/todos`         | Fetch all todos                 |
| POST   | `/todos`         | Add a new todo                  |
| DELETE | `/todos/:id`     | Delete a todo by ID             |
| PUT    | `/todos/:id`     | Update a todo by ID             |
| POST   | `/summarize`     | Summarize todos and send to Slack |

---

 ⚙️ Design & Architecture Decisions

- Used **Supabase** instead of traditional PostgreSQL for ease of hosting and direct RESTful access.
- Chose **Cohere** as the LLM provider due to free-tier support and fast, reliable text summarization via the `command-r-plus` model.
- Used **Slack Incoming Webhooks** for simplicity and easy integration without OAuth.
- Frontend was built using **React** with Axios for REST communication and basic CSS for styling.
- Backend is modularized into routes, controllers, services (LLM + Slack), and DB config for clean structure.

---

 ✅ Optional: Deployment Instructions

- **Frontend**: Deploy via [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- **Backend**: Deploy via [Render](https://render.com), [Railway](https://railway.app)
- **Database**: Supabase is already cloud-hosted

---

 📄 .env.example

```env
PORT=5000

SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_role_key

COHERE_API_KEY=your_cohere_api_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

---

 ✅ Deliverables

- [x] GitHub repo with **frontend and backend code**
- [x] `.env.example` file with all necessary keys
- [x] Clear `README.md` with setup, integration, and design explanation
- [x] Slack & LLM integrations using **real APIs**
- [ ] (Optional) Deployed URL to live app

---

📃 License

MIT License

---

 🙋‍♂️ Questions?

Feel free to open an issue or reach out!
