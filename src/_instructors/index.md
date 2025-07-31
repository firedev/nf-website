---
layout: default
title: Our Instructors
---

<div class="max-w-6xl mx-auto px-6 py-16">
  <div class="text-center mb-16">
    <h1 class="text-5xl font-light text-gray-900 mb-4">Our Instructors</h1>
    <div class="w-24 h-px bg-gray-300 mx-auto"></div>
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
    {% collections.instructors.resources.each do |resource| %}
      {% if resource.relative_path != "index.md" and resource.data.name and resource.data.name != "" %}
        <div class="group">
          <div class="flex flex-col items-center">
            {% if resource.data.image and resource.data.image != "" %}
              <div class="relative mb-6">
                <img src="{{ resource.data.image }}" 
                     alt="{{ resource.data.name }}" 
                     class="w-24 h-24 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
            {% end %}
            
            <h2 class="text-xl font-medium text-gray-900 mb-2">{{ resource.data.name }}</h2>
            
            {% if resource.data.affiliation and resource.data.affiliation != "" %}
              <p class="text-sm text-gray-500 mb-4 font-light">{{ resource.data.affiliation | markdownify | strip | safe }}</p>
            {% end %}
            
            {% if resource.data.certifications and resource.data.certifications.size > 0 %}
              <div class="text-center mb-4">
                <div class="flex flex-wrap justify-center gap-2">
                  {% resource.data.certifications.each do |certification| %}
                    {% if certification and certification != "" %}
                      <span class="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                        {{ certification }}
                      </span>
                    {% end %}
                  {% end %}
                </div>
              </div>
            {% end %}
            
            {% if resource.data.bio and resource.data.bio != "" %}
              <p class="text-sm text-gray-600 leading-relaxed text-center max-w-xs">{{ resource.data.bio }}</p>
            {% end %}
          </div>
        </div>
      {% end %}
    {% end %}
  </div>
</div> 