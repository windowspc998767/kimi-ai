export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://api.moonshot.cn/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.KIMI_API_KEY}`
    },
    body: JSON.stringify({
      model: "kimi-k2",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
