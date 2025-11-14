#!/bin/bash

# M3U8 Link Checker Pro - Quick Start Guide

echo "🚀 M3U8 Link Checker Pro - Quick Start"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}1️⃣  Checking Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi
echo -e "${GREEN}✅ Node.js found: $(node --version)${NC}"
echo ""

echo -e "${BLUE}2️⃣  Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

echo -e "${BLUE}3️⃣  Starting development server...${NC}"
echo -e "${YELLOW}📝 The app will open at: http://localhost:5173${NC}"
echo ""
echo -e "${YELLOW}Available commands:${NC}"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run preview  - Preview production build"
echo "  npm run lint     - Run linter"
echo ""

npm run dev
