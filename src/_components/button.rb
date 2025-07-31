class Button < Bridgetown::Component
  attr_reader :href, :icon
  def initialize(icon: 'document/file-text-fill', href: nil)
    @icon = icon
    @href = href
  end
end
