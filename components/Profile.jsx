import React from 'react'
import { PromptCard } from './PromptCard'

export const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
        <p className="desc text-left">{desc}</p>
        <div className="prompt_layout flex gap-2 flex-col">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      </h1>
    </section>
  )
}
