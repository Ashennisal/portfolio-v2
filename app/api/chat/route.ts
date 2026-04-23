import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// 1. Connect to Groq
const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    const { messages } = await req.json();

    // 2. The "System Prompt" defines your AI's personality
    const result = await streamText({
        model: groq('llama-3.1-70b-versatile'),
        system: `You are Ashen Nisal's AI assistant. 
             Ashen is an AI Specialization Student at SLIIT, Sri Lanka. 
             He is expert in Java, Spring Boot, and Next.js. 
             He built a Real Estate App and a Wedding Reservation system. 
             Keep answers concise, professional, and tech-focused.`,
        messages,
    });

    return result.toDataStreamResponse();
}