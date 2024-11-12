import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import Budget from "@/models/budgetModel";

export async function POST(req:NextRequest) {
  try {
    const { id } = await req.json()
    await connect();
    const budgets = await Budget.find({user:id});

    return NextResponse.json(
      { message: "All budgets fetched", budgets },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching budgets:", error);
    return NextResponse.json(
      { message: "Error fetching budgets" },
      { status: 500 }
    );
  }
}
