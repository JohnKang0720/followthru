//
//  ProjectCardView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct ProjectCardView: View {
    var body: some View {
        VStack {
            HStack {
                Text("About")
                    .padding(.all, 12)
                Spacer()
                Image(systemName: "circle")
                    .padding(.all, 12)
            }
        }
        .background(Color.secondary)
        .cornerRadius(20)
   }
}

struct ProjectCardView_Previews: PreviewProvider {
    static var previews: some View {
        ProjectCardView()
            .previewLayout(.sizeThatFits)
    }
}
