import "./ProfileHoverCard.css";
// import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

export const ProfileHoverCard = ({children,user}) => (
  <HoverCard.Root>
    <HoverCard.Trigger className="HoverCardTrigger">
      {children}
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <img
            className="Image large"
            src={user?.avatar}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            <div>
              <div className="Text bold">{user?.firstName} {user?.lastName}</div>
              <div className="Text faded">@{user?.username}</div>
            </div>
            <div className="Text">
              Components, icons, colors, and templates for building high-quality, accessible UI.
              Free and open-source.
            </div>
            <div style={{ display: 'flex', gap: 15 }}>
              <div style={{ display: 'flex', gap: 5 }}>
                <div className="Text bold">0</div> <div className="Text faded">Following</div>
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                <div className="Text bold">2,900</div> <div className="Text faded">Followers</div>
              </div>
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);