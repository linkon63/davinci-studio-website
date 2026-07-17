import type { Metadata } from "next";
import WorkDetailPageClient from "@/components/work/WorkDetailPageClient";
import { projectDetails } from "@/data/work";

interface WorkDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = parseInt(id) || 1;
  const project = projectDetails[projectId] || projectDetails[1];

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const projectId = parseInt(id) || 1;

  return <WorkDetailPageClient projectId={projectId} />;
}
